import FaqItem from "@/components/faq/faq-item";

export default function Faq() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl text-center mb-4">Faq</h1>
      <ul className="list-disc list-inside">
        <FaqItem
          question={"Donec eget ipsum cursus, consequat elit sed, maximus dui?"}
          answer={
            "Curabitur egestas, lacus lobortis cursus accumsan, turpis enim dignissim diam, vel congue ante erat at enim. Quisque eget justo rhoncus enim aliquet efficitur."
          }
        />
        <FaqItem
          question={"Sed sed mattis lorem?"}
          answer={
            "Ut faucibus a ex eu ullamcorper. Nunc condimentum est id eros dignissim, ut fermentum urna suscipit. Phasellus commodo felis eu rutrum tristique."
          }
        />
        <FaqItem
          question={"Sed interdum augue nec consectetur ornare?"}
          answer={
            "Cras ut ornare enim. Fusce mauris eros, luctus nec ipsum elementum, sagittis mattis leo. Nam ipsum urna, ultricies non enim a, aliquet lacinia risus."
          }
        />
      </ul>
    </div>
  );
}
