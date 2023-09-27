import Title from "./Title"



export default function TopLayout({ children }) {
  return (
    <div className="top-layout">
      <Title />
      {children}
    </div>
  )
}