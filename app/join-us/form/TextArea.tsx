// import textAreaBG from '@public/textAreaBG.png';

const TextArea = () => {
    return (
        <textarea id="area" className="bg-purple focus:outline-none border-none text-white placeholdeer-white" style={{ backgroundImage: `url(${textAreaBG})` }} />
        )
}

export default TextArea;