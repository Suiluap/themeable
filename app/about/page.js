import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-2xl">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="dark:invert"
          width={250}
          height={60}
          priority
        />
      </div>
      <h1 className="text-3xl text-center mt-6 mb-4">
        Lorem ipsum dolor sit amet
      </h1>
      <p className="indent-2 text-justify">
        Nullam libero dui, ullamcorper ac suscipit vitae, egestas nec lectus.
        Aenean condimentum, tortor nec laoreet suscipit, tellus est molestie
        odio, a semper purus dui egestas nunc. Nulla blandit aliquam est eu
        molestie. Morbi aliquam, metus et rhoncus gravida, mi augue feugiat
        metus, quis suscipit urna ligula a lectus. Proin eget euismod felis.
      </p>
      <p className="mb-1 indent-2 text-justify">
        Morbi tempus tincidunt lacinia. Sed hendrerit ex quis viverra ornare.
        Nam tincidunt arcu at eros vestibulum luctus. Nullam eget consequat
        metus. Fusce ac ipsum ultrices, lobortis dui eu, ullamcorper lacus.
        Aenean non eros eget lacus consectetur finibus vel id libero.
      </p>
      <p className="text-muted-foreground text-xs text-center">
        Nulla pellentesque ligula vel semper vulputate. Sed consectetur odio non
        nibh ultricies fringilla.
      </p>
    </div>
  );
}
