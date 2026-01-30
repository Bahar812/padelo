import { useEffect } from "react";
import { gsap } from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const services = [
  {
    title: "Open Play Nights",
    description:
      "Rotating partner matches with level-based courts and smooth pairing.",
    tag: "Daily 19:00",
  },
  {
    title: "Skill Builder Labs",
    description:
      "Small-group drills for footwork, control, and tactical placement.",
    tag: "Coach led",
  },
  {
    title: "Private Court Hire",
    description:
      "Book premium courts with lighting, lockers, and hydration stations.",
    tag: "2-hr slots",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "149k",
    perks: ["2 court sessions", "Community chat", "Guest pass"],
  },
  {
    name: "Club",
    price: "329k",
    perks: ["Unlimited open play", "2 coaching clinics", "Priority booking"],
    featured: true,
  },
  {
    name: "Pro",
    price: "599k",
    perks: ["Private court bundle", "Video analysis", "Tournament entry"],
  },
];

const testimonials = [
  {
    name: "Dina K.",
    role: "Weekend player",
    quote:
      "The energy is unreal. Every session feels like a mini event with friends.",
  },
  {
    name: "Rafi A.",
    role: "New member",
    quote: "Coaches are clear and patient. I improved my serve in two weeks.",
  },
  {
    name: "Maya P.",
    role: "Community lead",
    quote:
      "Padelo makes it easy to meet people and keep a weekly routine I love.",
  },
];

const heroImage =
  "https://i.pinimg.com/1200x/5b/9d/27/5b9d272554d2537a82a5a324217c0273.jpg";
const aboutImage =
  "https://i.pinimg.com/736x/64/ad/df/64addfcc23cf27b52e9dd550d087dfd4.jpg";

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-nav", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(".js-hero-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".js-hero-copy", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".js-hero-actions > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.35,
      });
      gsap.from(".js-stat", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-ink">
      <section
        id="home"
        className="relative w-full overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.15) 100%), url(${heroImage})`,
        }}
      >
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-10 pt-8 md:px-8 lg:px-10">
          <nav className="js-nav flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/80">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 font-display text-base tracking-normal text-white">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-sm">
                P
              </span>
              Padelo
            </div>
            <button className="rounded-full border border-white/50 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-white transition hover:border-lime hover:text-lime">
              Join now
            </button>
          </nav>

          <div className="mt-10 flex flex-1 flex-col justify-end gap-6 lg:flex-row lg:items-end lg:gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pinimg.com/736x/50/1d/f1/501df15ed64623ab3b8054eb2b9bb0d0.jpg"
                    alt="Member"
                    className="h-10 w-10 rounded-full border border-white/40 object-cover"
                  />
                  <img
                    src="https://i.pinimg.com/736x/1a/95/94/1a9594d53f14a3720613722937b88016.jpg"
                    alt="Member"
                    className="h-10 w-10 rounded-full border border-white/40 object-cover"
                  />
                  <img
                    src="https://i.pinimg.com/1200x/20/fc/91/20fc9169c22f0e83f60ceaf90fbf52de.jpg"
                    alt="Member"
                    className="h-10 w-10 rounded-full border border-white/40 object-cover"
                  />
                  <img
                    src="https://i.pinimg.com/736x/d6/e7/65/d6e7655a95c2fc06da21c080ef0f619a.jpg"
                    alt="Member"
                    className="h-10 w-10 rounded-full border border-white/40 object-cover"
                  />
                </div>
                <div className="js-stat">
                  <div className="text-lg font-semibold text-white">
                    1,200+
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                    Active members
                  </div>
                </div>
              </div>

              <h1 className="js-hero-title text-balance font-display text-4xl leading-tight md:text-6xl">
                Rackets, Laughs, and Good Times.
              </h1>
            </div>

            <div className="js-hero-copy max-w-sm text-sm text-white/80 md:text-base">
              Experience padel like never before with friendly matches,
              skill-building sessions, and a community that feels like family.
              <div className="js-hero-actions mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white">
                  Join the group
                </button>
                <button className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:border-lime hover:text-lime">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-8 lg:px-10">
        <section id="about" className="js-section mt-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr_0.8fr] lg:items-stretch">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <span className="inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/70 shadow-sm">
                  About Padel Club
                </span>
                <h2 className="mt-5 text-balance font-display text-2xl leading-snug md:text-3xl">
                  At our padel center, we bring sport and community together.
                </h2>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  From beginners to professionals, everyone can find their place
                  here. Friendly matches, structured coaching, and a crew that
                  keeps you coming back.
                </p>
              </div>
              <button className="w-fit rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/90">
                Get in touch
              </button>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-lg">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Outdoor padel courts"
                  className="h-72 w-full object-cover md:h-80"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                  Outdoor area
                </span>
                <button className="absolute bottom-4 right-4 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-ink/90">
                  View
                </button>
              </div>
              <div className="px-5 py-4 text-sm text-ink/70">
                A space for training, relaxing, and friendly matches.
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-lg">
                <div className="relative">
                  <img
                    src="https://i.pinimg.com/736x/b7/44/44/b744443bb3215c9431476e9cdf341d01.jpg"
                    alt="Indoor courts"
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                    Indoor courts
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
                    Court
                  </span>
                </div>
                <div className="px-5 py-4 text-sm text-ink/70">
                  Discover your new favorite place to play, train, and compete.
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="h-10 w-10 rounded-full border border-ink/20 text-sm font-semibold text-ink transition hover:border-ink/60">
                  &lt;
                </button>
                <button className="h-10 w-10 rounded-full border border-ink/20 text-sm font-semibold text-ink transition hover:border-ink/60">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="js-section mt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[28px] border border-ink/10 bg-[#0f1012] text-white shadow-xl">
              <div className="grid gap-6 p-6 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
                <img
                  src="https://i.pinimg.com/1200x/77/79/45/777945e6ee56fea59af033ece8520293.jpg"
                  alt="Premium padel courts"
                  className="h-56 w-full rounded-2xl object-cover md:h-full"
                />
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">
                      Premium Padel Courts for Training and Play
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      Our courts are designed for both individual and group
                      sessions with pro-grade lighting and court care.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-lime hover:text-lime">
                      Book a court
                    </button>
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <span>1/8</span>
                      <div className="flex items-center gap-2">
                        <button className="h-9 w-9 rounded-full border border-white/20 text-sm transition hover:border-white/60">
                          &lt;
                        </button>
                        <button className="h-9 w-9 rounded-full border border-white/20 text-sm transition hover:border-white/60">
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-lime">
                  Experience
                </p>
                <h2 className="mt-3 text-balance font-display text-3xl md:text-4xl">
                  Experience the Best in Padel and More
                </h2>
              </div>
              <div className="relative rounded-[24px] border border-ink/10 bg-white p-5 shadow-lg">
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
                  +
                </div>
                <div className="grid gap-4 md:grid-cols-[0.55fr_0.45fr] md:items-center">
                  <img
                    src="https://i.pinimg.com/736x/00/3d/d0/003dd0ca292662178259a5e70428a4b3.jpg"
                    alt="Padel racket and balls"
                    className="h-40 w-full rounded-2xl object-cover"
                  />
                  <p className="text-sm text-ink/70">
                    Our facilities feature state-of-the-art padel courts,
                    training zones, and spaces for casual games. A place where
                    sport and leisure come together perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="js-section mt-16">
          <div className="rounded-[28px] border border-ink/10 bg-[#f4f4f4] p-6 shadow-lg md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-ink/60">
                  Explore Our Facilities
                </p>
                <h2 className="mt-3 font-display text-2xl md:text-3xl">
                  Explore Our Facilities
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink/60">
                  <span>Search here...</span>
                  <span className="text-ink/40">⌕</span>
                </div>
                <button className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-ink/90">
                  View all
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
              {[
                {
                  title: "Padel Court",
                  image:
                    "https://i.pinimg.com/1200x/f5/5b/f4/f55bf4e871947a998f458bb741db42de.jpg",
                  copy: "Professionally designed courts for sharp skill drills.",
                },
                {
                  title: "Lounge & Cafe",
                  image:
                    "https://i.pinimg.com/1200x/87/22/17/872217e6fbcf685ae039df7746bfbf9f.jpg",
                  copy: "Relax after play in our cozy lounge & cafe.",
                },
                {
                  title: "Fitness Zone",
                  image:
                    "https://i.pinimg.com/1200x/14/7d/c4/147dc49067ba3be61ebb574fbf299531.jpg",
                  copy: "Train, recover, and build endurance in our gym.",
                },
                {
                  title: "Events & Tournaments",
                  image:
                    "https://i.pinimg.com/1200x/66/93/72/669372bcac60a5e7789c98d493130ac1.jpg",
                  copy: "Join friendly matches and official tournaments.",
                },
              ].map((facility) => (
                <div
                  key={facility.title}
                  className="group relative overflow-hidden rounded-[22px] bg-white shadow-md"
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4 text-white">
                    <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                      {facility.title}
                    </div>
                    <p className="mt-3 text-sm text-white/90">
                      {facility.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-ink/60">
              <div className="flex items-center gap-2">
                <button className="h-9 w-9 rounded-full border border-ink/20 text-sm transition hover:border-ink/50">
                  &lt;
                </button>
                <button className="h-9 w-9 rounded-full border border-ink/20 text-sm transition hover:border-ink/50">
                  &gt;
                </button>
              </div>
              <p>
                Book a court or training, friendly matches, or private coaching
                and discover a new level of padel in a welcoming atmosphere.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="js-section mt-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/70 shadow-sm">
                Testimonials
              </span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                What Our Members Say
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="h-10 w-10 rounded-full border border-ink/20 text-sm font-semibold text-ink transition hover:border-ink/60">
                &lt;
              </button>
              <button className="h-10 w-10 rounded-full bg-ink text-sm font-semibold text-white transition hover:bg-ink/90">
                &gt;
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-white shadow-lg">
              <img
                src="https://i.pinimg.com/736x/24/ac/57/24ac57d23ae18451b1d5538ff364a3bc.jpg"
                alt="Padel player on court"
                className="h-72 w-full object-cover md:h-80"
              />
            </div>

            <div className="space-y-6">
              <div className="text-5xl font-semibold text-ink">“</div>
              <p className="max-w-xl text-base text-ink/80 md:text-lg">
                Joining the padel club has been the best decision for my free
                time. The atmosphere is amazing, and every match brings
                excitement and new friends!
              </p>
              <div>
                <div className="text-sm font-semibold text-ink">
                  Marina S.
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-ink/60">
                  Club member
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-ink/50">
                <span>1/8</span>
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-ink/10">
                  <img
                    src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=200&q=80"
                    alt="Member profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="js-section mt-16 overflow-hidden rounded-[32px] border border-ink/10 bg-cover bg-center text-white shadow-xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(10,16,20,0.78) 0%, rgba(10,16,20,0.35) 55%, rgba(10,16,20,0.08) 100%), url(https://i.pinimg.com/736x/b3/1d/8e/b31d8e2ff106ab886723c152f4be70fd.jpg)",
          }}
        >
          <div className="flex min-h-[320px] flex-col justify-center px-8 py-12 md:min-h-[360px] md:px-12">
            <h2 className="text-balance font-display text-3xl md:text-4xl">
              Ready to play with us?
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
              Experience padel like never before — friendly matches, training
              sessions, and a community that feels like family.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-lime">
                Join the group
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
