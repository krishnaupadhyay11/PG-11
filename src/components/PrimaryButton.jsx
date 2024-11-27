import { Link } from "react-router-dom"

export default function PrimaryButton({link, title}) {
  return (
    <Link to={link} className="primary-button mt-6">
        {title}
    </Link>
  )
}
