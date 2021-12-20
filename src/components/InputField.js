function InputField({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}){
    return(
        <>
        <input className="border" type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        <div className="text-red-500">{errorMessage}</div>
        </>
    );

}
export default InputField