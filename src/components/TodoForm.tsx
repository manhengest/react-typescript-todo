import React, {useState} from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(title)
      setTitle('')
    }
  }

  return (
      <div className="input-field">
        <input type="text"
               value={title}
               onChange={changeHandler}
               onKeyPress={keyPressHandler}
               id="title" placeholder="What do you want to do"/>
        <label htmlFor="title" className="active">What do you want to do?</label>
      </div>
  )
}
