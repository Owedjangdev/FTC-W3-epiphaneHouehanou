


import NavBar from "@/components/NavBarcat";


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar/> 
      <main>{children}</main>
    
    </>
  );
}