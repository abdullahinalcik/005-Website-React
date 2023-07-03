import Button from "./Button"
import Input from "./Input"
import"./Mail.css"

export const Mail = () => {
  return (
    <section className="mail">
      <p>Subcribe To Our Newsletter</p>
      <form action="">
        <Input/>
        <Button/>
      </form>
    </section>
  )
}
