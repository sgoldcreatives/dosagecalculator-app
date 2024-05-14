import Image from "next/image";
const logoUrl = "/logo-clinic.png";

export function Title() {
  const imgSize = 201 / 2;

  return (
    <div className="ml-4 mt-4 mr-4 flex items-center bg-violet-100 rounded-md border-violet-300 border-2 p-3 max-w-full">
      <div className="ml-2">
        <div className="flex items-center">
          <Image
            src={logoUrl}
            alt="Logo of All Vet Care Animal Hospital"
            width={imgSize}
            height={imgSize}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
          <div>
            <h1 className=" text-5xl font-semibold mt-2 ml-2 text-slate-950">
              VetDose
            </h1>
            <h1 className="italic text-xl ml-4 font-normal text-opacity-55 mt-2 text-slate-950">
              The premier dosage calculator of All Vet Care Animal Hospital
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
