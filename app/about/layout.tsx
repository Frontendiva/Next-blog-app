import Link from "next/link";

export default function AboutLayot({
    children,
}: {
        children: React.ReactNode;
        
    }) {
    return <div>
        <h1>About us</h1>
        <ul>
            <li>
                <Link href="/about/contact">Contacts</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        {children}
    </div>
}