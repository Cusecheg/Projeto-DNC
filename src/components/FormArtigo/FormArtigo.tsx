"use client";

import { Post } from "@prisma/client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const FormArtigo = ({ members }: { members: any[] }) => {
  const [message, setMessage] = useState<string | null>("");
  const [userSelected, setUserSelected] = useState<string>("");
  const { register, handleSubmit, watch, reset} = useForm<Post>({});
  const [img, setImg] = useState<File | null>(null);
  const [fotoURL, setFotoURL] = useState<string>(
    "/ImgMembers/Background.svg"
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      const form = new FormData();
      form.append("authorId", data.authorId);
      form.append("image", img || "");
      form.append("datePublication", data.datePublication);
      form.append("title", data.title);
      form.append("text", data.text);

      const response = await fetch("/api/artigo", {
        method: "POST",
        body: form,
      });
          if (response.ok){
            const res = await response.json();
            setMessage(res.msg)

            setTimeout(()=>{

            setImg(null);
            setFotoURL( "/ImgMembers/Background.svg")
            reset();
            setUserSelected("");
            setMessage("");
            }, 3000)
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
  });

  //Conversion seleted image and render
  const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files && files.length > 0) {
      const imageSelected = files[0];
      setImg(imageSelected);
      setFotoURL(URL.createObjectURL(imageSelected));
    }
  };

  // Handle value of the input (profession)
  useEffect(() => {
    const handleProfession = () => {
      const authorId = watch("authorId");
      const selectedMember = members.find((member) => member.id === authorId);
      const profession = selectedMember ? selectedMember.profession : "";
      setUserSelected(profession);
    };
    handleProfession();
  }, [watch("authorId")]);


  return (
    <>
      <main className="grid place-items-center  bg-gray-200 pr-8">
        <div className=" place-items-center  max-w-screen-xl w-full">
          <form onSubmit={onSubmit} className="ml-5">
            <div className="m-4 pt-4 gap-y-5
            grid place-items-center md:grid-cols-2 
            ">
                 <Image
                 src={fotoURL}
                 height={150}
                 width={300}
                 alt="erro"
                 />

              <div className="ml-5">
                <label
                  className="text-center block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="image"
                >
                  Upload de imagem
                </label>
                <input
                  onChange={handleSelectedImage}
                  className="block w-full text-sm text-gray-900 border border-gray-300 
                    rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="image"
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  required
                />
                <p className="text-center mt-1 text-sm text-gray-500" id="file_input_help">
                jpeg, jpg or png (Máx. 500 x 500px).<br/>
                  Máx(2Mb)
                </p>
              </div>
            </div>
            <div className="ml-5">
              <div className="ml-5 mb-4 pt-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nome"
                >
                  Nome
                </label>
                <select
                  {...register("authorId", {
                    required: true,
                  })}
                  className="shadow  border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nome"
                  required
                >
                  <option value="">Selecione um membro</option>
                  {members.map((member: any, index: number) => (
                    <option key={index} value={member.id}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ml-5 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="profession"
                >
                  Profession
                </label>
                <input
                  value={userSelected}
                  className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="profession"
                  type="text"
                  placeholder="Profession"
                  readOnly
                />
              </div>
              <div className="ml-5 mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="datePublication"
                >
                  Data
                </label>
                <input
                  {...register("datePublication", {
                    required: true,
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="datePublication"
                  type="date"
                  required
                />
              </div>
              <div className="ml-5 mb-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Titulo
                </label>
                <input
                  {...register("title", {
                    required: true,
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Titulo"
                  required
                />
              </div>
              <div className="ml-5 bg-white rounded-b-lg dark:bg-gray-800">
                <label className=" text-black sr-only">Publicar artigo</label>
                <textarea
                  {...register("text", {
                    required: true,
                  })}
                  id="text"
                  className="block w-full p-3 text-sm shadow text-gray-800 bg-white border-0 dark:bg-gray-800 
                        focus:ring-0 dark:placeholder-gray-400"
                  placeholder="Escrever um artigo..."
                  required
                ></textarea>
              </div>
              <div className="flex flex-col py-4 md:flex-row md:justify-end items-center md:gap-14">
                {message &&
                <div className="text-black">
                  {message}
                </div>}
                <button
                  type="submit"
                  className="my-7 ml-5 inline-flex items-center px-5 py-2.5 text-sm font-medium 
                text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-200 
                dark:focus:ring-blue-900 hover:bg-blue-800  duration-500 hover:-translate-y-2 "
                >
                  PUBLICAR ARTIGO
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
