import Link from "next/link";

const mockImageUris = [
  "https://utfs.io/f/a467990f-5adc-49fa-a0bf-53295fb0de9c-pd4lvw.jpeg",
  "https://utfs.io/f/b5aaea47-6a14-492b-aeef-d4bba1e40863-sk1p8h.jpg",
  "https://utfs.io/f/b5aaea47-6a14-492b-aeef-d4bba1e40863-sk1p8h.jpg",
  "https://utfs.io/f/3544b3e5-23f6-4191-a98d-8a63defb2b68-ku64rc.webp",
  "https://utfs.io/f/cd27c7a2-5a06-4c5f-923a-7c6aa6151635-nlisfc.jpeg",
]

const mocklImages = mockImageUris.map((uri,index) => ({id:index+1,uri}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mocklImages,...mocklImages,...mocklImages].map(image => (
          <div key = {image.id} className = "w-48">
              <img src = {image.uri}/>
            </div>
        ))}
      </div>
    </main>
  );
}
