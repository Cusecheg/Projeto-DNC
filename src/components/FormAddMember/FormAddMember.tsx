"use client";

import { Member } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

export const FormAddMember = () => {
  const [message, setMessage] = useState<string | null>("");
  const { register, handleSubmit, reset } = useForm<Member>({});
  const [img, setImg] = useState<string | File>("");
  const [handdleAddMember, setHanddleAddMember] = useState<boolean>(false);
  const [fotoURL, setFotoURL] = useState<string | null>(
    "/ImgMembers/Background.svg"
  );


  //Add members
  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("profession", data.profession);
    form.append("location", data.location);
    form.append("email", data.email);
    form.append("linkedin", data.linkedin);
    form.append("image", img);

    try {
      const response = await fetch("/api/member", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.msg);
        setTimeout(() => {
          setMessage("");
          setFotoURL("/ImgMembers/Background.svg");
          setImg("");
          reset();
        }, 3000);
      } else {
        const data = await response.json();
        setMessage(data.error);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error(error)
    }
  });

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
    <div>
      <div className="grid grid-cols-1 transition-all place-items-center w-full max-w-screen-xl">
        <div className="grid place-items-center md:grid md:place-items-end w-full p-2">
          <button
            className="bg-black rounded-md  text-white font-Alegreya w-auto  py-2 px-3 transition-all duration-500 hover:-translate-y-2"
            onClick={() => setHanddleAddMember(!handdleAddMember)}
            type="button"
          >
            Adicionar Membro
          </button>
        </div>
      </div>
      {handdleAddMember && (
        <>
          <div className="w-full h-full bg-slate-700 opacity-50  absolute top-0 left-0  z-20" />
          <div className="grid w-full h-full absolute z-30 pt-96  ">
            <div className="grid justify-items-center max-w-screen-xl">
              <div className="flex flex-col  items-center md:flex md:flex-row md:items-start  bg-white rounded-3xl absolute top-0 z-30">
                <div className="grid place-items-center">
                  <img
                    className="p-4"
                    src={`${fotoURL}`}
                    alt="Foto seleccionada"
                    style={{ width: "200px" }}
                  />{" "}
                  {fotoURL == "/ImgMembers/Background.svg" && (
                    <p className="text-black font-Alegreya font-bold">
                      Adicione uma foto
                    </p>
                  )}
                </div>
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
                    {...register("image", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleSelectedImage}
                  />
                  <div className="grid grid-cols-2 place-items-center  pt-4">
                    <button
                      className="bg-black rounded-md  text-white font-Alegreya w-24  py-1  transition-all duration-500 hover:-translate-y-2"
                      type="submit"
                    >
                      Adicionar
                    </button>
                    <button
                      className="bg-black rounded-md  text-white font-Alegreya w-24  py-1 transition-all duration-500 hover:-translate-y-2"
                      onClick={() => setHanddleAddMember(!setHanddleAddMember)}
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};
