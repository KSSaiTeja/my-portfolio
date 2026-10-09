import { brands, brandsIntro, type Brand } from "./brands-content";

function BrandList({
  copy,
  hidden = false,
}: {
  copy: string;
  hidden?: boolean;
}) {
  return (
    <ul className="brands__list" aria-hidden={hidden || undefined}>
      {brands.map((brand: Brand) => (
        <li
          key={`${copy}-${brand.id}`}
          className={`brands__item brands__item--${brand.tone}`}
        >
          <img src={brand.src} alt={hidden ? "" : brand.name} />
        </li>
      ))}
    </ul>
  );
}

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-heading">
      <h2 id="brands-heading" className="brands__heading">
        {brandsIntro.heading}
      </h2>

      <div className="brands__viewport">
        <div className="brands__track">
          <BrandList copy="a" />
          <BrandList copy="b" hidden />
        </div>
      </div>
    </section>
  );
}
