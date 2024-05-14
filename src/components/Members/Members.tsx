"use client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { ConfirmationModal } from "../ConfirmatioModal/confirmationModal";

export const Members = ({
  line,
  image,
  id,
  name,
  profession,
  location,
  email,
  linkedin,
  session,
}: {
  line: boolean;
  image: string;
  id: string;
  name: string;
  profession: string;
  location: string;
  email: string;
  linkedin: string;
  session: string | undefined;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState<string | File>(image);
  const [message, setMessage] = useState<string | null>("");
  const [handdleEditar, setHanddleEditar] = useState<boolean>(false);
  const [fotoURL, setFotoURL] = useState<string | null>(
    image ? image : "/ImgMembers/Background.svg"
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: id,
      name: name,
      profession: profession,
      location: location,
      email: email,
      linkedin: linkedin,
      image: image,
    },
  });

  // Update member
  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("id", id);
    form.append("name", data.name);
    form.append("profession", data.profession);
    form.append("location", data.location);
    form.append("email", data.email);
    form.append("linkedin", data.linkedin);
    form.append("image", img);

    try {
      const response = await fetch("/api/member", {
        method: "PUT",
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.msg);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        const data = await response.json();
        setMessage(data.error);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.error(error)
    }
  });

  //Delete member
  const onDelete = async () => {
    try {
      const response = await fetch(`/api/member?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Aplication/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.msg);
        setShowModal(false);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        const data = await response.json();
        setMessage(data.msg);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.error(error)
    }
  };

  //Render and conversion seleted image
  const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files && files.length > 0) {
      const imageSelected = files[0];
      setImg(imageSelected);
      setFotoURL(URL.createObjectURL(imageSelected));
    }
  };

  return (
    <div className="relative w-full  grid place-items-center max-w-screen-xl p-4">
      {handdleEditar && (
        <>
          <div className="w-full h-full bg-slate-700 opacity-50 rounded-3xl  absolute  z-20" />
          <div className="flex flex-col items-center md:flex md:flex-row md:items-start  bg-white rounded-3xl  absolute  z-30"
          >
            <img
              className="p-4"
              src={`${fotoURL}`}
              alt="Foto seleccionada"
              style={{ width: "200px" }}
            />{" "}
            <form
              onSubmit={onSubmit}
              className="text-black font-Alegreya font-bold grid gap-1 p-4 max-w-screen-sm"
            >
              <label htmlFor="name">Nome</label>
              <input
                {...register("name", {
                  required: true,
                })}
                className="text-gray-500"
                id="name"
                type="text"
                placeholder="Nome"
                required
              />
              <label htmlFor="profession">Profissão</label>
              <input
                {...register("profession", {
                  required: true,
                })}
                className="text-gray-500"
                id="profession"
                type="text"
                placeholder="Profissao"
                required
              />
              <label htmlFor="location">Região</label>
              <input
                {...register("location", {
                  required: true,
                })}
                className="text-gray-500"
                id="location"
                type="text"
                placeholder="Região"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: false,
                })}
                className="text-gray-500"
                id="email"
                type="email"
                placeholder="Email"
              />
              <label htmlFor="linkedin">Linkedin</label>
              <input
                {...register("linkedin", {
                  required: false,
                })}
                className="text-gray-500"
                id="linkedin"
                type="text"
                placeholder="LinkedIn"
                
              />
              <label htmlFor="image">Foto</label>
              <input
                className="text-gray-500"
                id="image"
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                onChange={handleSelectedImage}
              />
              <p className="text-center pt-1"> 
                jpeg, jpg or png (Máx. 500 x 500px).<br/>
                Máx(2Mb)
              </p>
              <div className="grid grid-cols-2 place-items-center  pt-1">
                <button
                  className="bg-black rounded-md  text-white font-Alegreya w-24  py-1  transition-all duration-500 hover:-translate-y-2"
                  type="submit"
                >
                  Guardar
                </button>
                <button
                  className="bg-black rounded-md  text-white font-Alegreya w-24  py-1 transition-all duration-500 hover:-translate-y-2"
                  onClick={() => setHanddleEditar(!handdleEditar)}
                  type="button"
                >
                  Sair
                </button>
              </div>
              {message && (
                <div className="grid place-items-center p-2 font-bold">
                  <p>{message}</p>
                </div>
              )}
            </form>
          </div>
        </>
      )}

      {line && (
        <div className="grid grid-rows-2 w-full place-items-end">
          <div className="border-black mb-5  border w-full" />
        </div>
      )}

      <div className="grid md:grid md:grid-cols-2   text-black">
        <div className="grid grid-cols-1 place-items-center">
          <img
            src={`${image}`}
            alt={`Imagen de ${name} `}
            style={{ width: "436px" }}
          />
        </div>

        <div className="mt-4 p-3">
          {session && (
            <div className="flex justify-evenly   md:flex md:flex-row md:justify-end pb-5 gap-10">
              <button
                className="bg-black rounded-md  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
                onClick={() => {
                  setHanddleEditar(!handdleEditar);
                }}
              >
                Editar
              </button>

              <button
                className="bg-black rounded-md  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
                onClick={() => setShowModal(true)}
              >
                Remover
              </button>
            </div>
          )}
          {showModal && (
            <ConfirmationModal
              message="¿Você deseja realmente realizar esta ação?"
              onConfirm={onDelete}
              onCancel={() => {
                setShowModal(false);
              }}
            />
          )}

          <h1 className="font-Alegreya font-bold text-2xl border-b-2 mb-5 border-black">
            {name}
          </h1>

          <div className="grid gap-3 md:grid  md:grid-cols-2 break-all">
            {profession && (
              <h1 className="font-Lato font-medium text-3xl">{profession}</h1>
            )}

            <div className="grid gap-3 font-Lato font-medium text-zinc-500">
              {location && (
                <div className="flex gap-3">
                  <img
                    src="/SocialMediaIcons/Location.svg"
                    alt="Location Icon"
                  />
                  {location}
                </div>
              )}

              {email && (
                <a href={`mailto:${email}`} className="flex gap-3 underline">
                  <img src="/SocialMediaIcons/Email.svg" alt="Email Icon" />
                  {email}
                </a>
              )}

              {linkedin && (
                <a href={linkedin} className="flex gap-3">
                  <img
                    src="/SocialMediaIcons/Linkedin.svg"
                    alt="Linkedin Icon"
                  />
                  {linkedin}
                </a>
              )}
            </div>
          </div>
          {message && (
            <div className="grid place-items-center mt-12 font-bold">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
