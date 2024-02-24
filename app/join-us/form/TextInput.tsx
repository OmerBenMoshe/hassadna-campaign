const TextInput = ({...rest}: {placeholder: string}) => {
    return (
        <input type="text" className="bg-purple rounded-full border-white border-2 focus:bg-white focus:outline-none p-3 text-sm transition hover:border-neon placeholder-white" {...rest}/>
    )
}

export default TextInput;