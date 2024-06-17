import { ReactElement } from "react"

interface CardProps {

    children: ReactElement | ReactElement[],
    className?: string;

}

export default function Card({children, className}: CardProps)
{
    return <div className={`${className} border-2 p-2 rounded align-items`}>{children}</div>
}