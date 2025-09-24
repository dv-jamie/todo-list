import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <h1>환영합니다!</h1>

            <Link to="/todo">할일 보기</Link>
        </div>
    )
}

export default HomePage