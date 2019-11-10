import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import "./ListCardFooter.css"

const ListCardFooter = () => {
  return (
    <div className="list-card-footer">
      <div className="list-card-footer-actions">
        <FontAwesomeIcon
        icon={faPen}
        color="#009688"
        size="sm"
        />
        <FontAwesomeIcon
        icon={faTrash}
        color="#834bff"
        size="sm"
        />
      </div>
      <p>Total: R$ 50</p>
    </div>
  )
}

export default ListCardFooter