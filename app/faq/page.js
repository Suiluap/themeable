export default function Faq() {
  return (
    <div className='max-w-2xl'>
      <h1 className='text-3xl text-center mb-4'>
        Faq
      </h1>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <span className="text-lg">Donec eget ipsum cursus, consequat elit sed, maximus dui?</span>
          <p className="text-justify ml-1">Curabitur egestas, lacus lobortis cursus accumsan, turpis enim dignissim diam, vel congue ante erat at enim. Quisque eget justo rhoncus enim aliquet efficitur.</p>
        </li>
        <li className="mb-2">
          <span className="text-lg">Sed sed mattis lorem?</span>
          <p className="text-justify ml-1">Ut faucibus a ex eu ullamcorper. Nunc condimentum est id eros dignissim, ut fermentum urna suscipit. Phasellus commodo felis eu rutrum tristique.</p>
        </li>
        <li className="mb-2">
          <span className="text-lg">Sed interdum augue nec consectetur ornare?</span>
          <p className="text-justify ml-1">Cras ut ornare enim. Fusce mauris eros, luctus nec ipsum elementum, sagittis mattis leo. Nam ipsum urna, ultricies non enim a, aliquet lacinia risus.</p>
        </li>
      </ul>
    </div>
  )
}