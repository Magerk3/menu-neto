import { Link } from "react-router-dom"

export const Page404 = () =>  {
    return (
      <article className="article">
        <h1 className="article__title">404</h1>
        <p className="article__paragraph">
          page not found
        </p>
        <Link className="menu__item " to="/"> Go home </Link>

      </article>
    )
  }