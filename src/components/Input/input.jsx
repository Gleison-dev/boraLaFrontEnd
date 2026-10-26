export default function Input({ type, value, onChange, placeholder }) {
  return (
    <>
      <input
        className="w-50 h-8 p-2 ring rounded-xl outline-none focus:ring-2 focus:ring-azul-marinho"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
