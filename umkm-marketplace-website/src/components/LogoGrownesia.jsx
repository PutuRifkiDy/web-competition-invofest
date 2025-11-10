import IconLogo from "./icon/IconLogo";

export default function LogoGrownesia() {
  return (
    <section className="flex flex-row gap-2 items-center">
      <div className="flex flex-row gap-2 items-center p-3 rounded-xl bg-gradient-to-b from-[#3EB489] to-[#1B4E3B]">
        <IconLogo />
      </div>
      <p className="font-agbalumo text-[31.22px] tracking-[-1%] text-[#3EB489]">Grownesia</p>
    </section>
  );
}
