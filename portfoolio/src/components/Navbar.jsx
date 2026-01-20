import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <img className="main-picture" src="https://plus.unsplash.com/premium_photo-1667187633142-cb13b294b68a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="rectangle"></div>
        <div className="navigation-pictures">
            <Link className="main-link" to="work">
            <img src="https://plus.unsplash.com/premium_photo-1768396819768-0805d38cb1fb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Tööde lehele</p>
            </Link>
            <Link className="main-link" to="hobbies">
            <img src="https://plus.unsplash.com/premium_photo-1768396819784-ad3d159c1d79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt="" />
            <p>Hobide lehele</p>
            </Link>
            <Link className="main-link" to="courses">
            <img src="https://plus.unsplash.com/premium_photo-1675130119238-6a0319499d60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
            <p>Kursuste lehele</p>
            </Link>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jlDv4rMmhUw?si=C8JXb0nM8hqIHwfj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Navbar