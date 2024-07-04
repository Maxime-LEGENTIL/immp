import Link from "next/link";

export default function Footer() {
    return <>
        <div className="container-fluid mt-5 p-2 text-center" style={{backgroundColor: "#ec6726"}}>
            <span className="text-white fw-bold">© 2022 - 2024 - IMMP.fr</span>

            <div className="pt-3">
                <Link href="/mentions-legales" style={{color: 'white', textDecoration: 'none'}}>Mentions légales</Link>
            </div>
        </div>
    </>
}