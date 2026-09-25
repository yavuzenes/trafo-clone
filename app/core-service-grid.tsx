import Image from "next/image";
import Link from "next/link";
import { coreGroups } from "./core-services";

export function CoreServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`core-groups${compact ? " core-groups-compact" : ""}`}>
      {coreGroups.map((group) => (
        <section className="core-group" key={group.title} aria-label={group.title}>
          <div className="core-group-head">
            <span>{group.eyebrow}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </div>
          <div className="core-grid">
            {group.services.map((service) => (
              <Link className="core-card" href={`/hizmetler/${service.slug}`} key={service.slug}>
                <span className="core-card-media"><Image src={service.image} alt={`${service.title} kapsamında saha ekipmanı`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></span>
                <span className="core-card-body"><strong>{service.title}</strong><span>{service.summary}</span><em>Hizmeti inceleyin <span aria-hidden="true">↗</span></em></span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
