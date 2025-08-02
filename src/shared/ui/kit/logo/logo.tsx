import BookIcon from "../../../assets/icons/book.svg"
import "./logo.css"
import { Button, ButtonProps } from "../button/button"
import clsx from "clsx"
import Link from "next/link"

export function Logo<T extends React.ElementType>(props: ButtonProps<T>) {
   return (
      <Button
         as={Link}
         href={props.href || "/"}
         leftIcon={<BookIcon />}
         rightIcon={<BookIcon />}
         defaultHover={false}
         className={clsx("ui-logo", props.className)}
         {...props}
      >
         StoryQuests
      </Button>
   )
}
