


import NavBari from "@/components/NavBari";


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBari/> 
      <main>{children}</main>
    
    </>
  );
}