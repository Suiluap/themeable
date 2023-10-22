export default function FaqItem({ question, answer }) {
  return (
    <li className="mb-2">
      <span className="text-lg">{ question }</span>
      <p className="text-justify ml-1">{ answer }</p>
    </li>
  )
}