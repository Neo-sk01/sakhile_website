import { Check } from "lucide-react"

const packages = [
    {
        title: "Consultation & Site Visit",
        price: "R800 - R1 200",
        description: "Ideal for initial advice and design ideas.",
        details: "Depending on distance",
        features: [
            "1-hour site meeting",
            "Verbal advice & design ideas",
        ],
        extras: "Optional: Written notes or concept sketch +R300",
    },
    {
        title: "Concept Design Package",
        price: "R2 500 - R4 500",
        description: "Explore ideas before committing to full design.",
        features: [
            "2-3 Initial layout options",
            "Basic 2D sketches or 3D massing views",
        ],
        extras: "Add-on: 3D visuals from +R800",
    },
    {
        title: "Municipal Submission",
        price: "Variable",
        description: "Complete council-ready drawings & submission.",
        features: [
            "Site plan, floor plans, elevations, sections",
            "Form filling & submission assistance",
        ],
        highlight: true,
        priceDetails: [
            { label: "Small Additions", value: "R5 000 - R8 000" },
            { label: "Small House (<150m²)", value: "R8 000 - R12 000" },
            { label: "Larger Projects", value: "±R80 - R120/m²" },
        ],
    },
    {
        title: "Full Design & Documentation",
        price: "From R12 000",
        description: "Comprehensive design process start to finish.",
        features: [
            "Full design process & construction drawings",
            "Material suggestions & client meetings",
        ],
        highlight: true,
        priceDetails: [
            { label: "Basic", value: "R12 000 - R18 000" },
            { label: "With 3D visuals", value: "R18 000 - R25 000+" },
        ],
        footer: "Payment plan available in stages",
    },
]

const addOns = [
    { name: "3D Renders (2-4 views)", price: "R1 500 - R3 500" },
    { name: "Building Measurements", price: "R800 - R1 200/floor" },
    { name: "As-Built Plans", price: "R1 500 - R3 500" },
    { name: "Additional Site Visits", price: "R400 - R700" },
    { name: "Council Follow-ups", price: "R500+" },
]

export function PricingSection() {
    return (
        <>
            {/* Divider */}
            <div className="section-divider" />

            <section id="pricing" className="bg-background py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                            Pricing Guide
                        </span>
                        <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Project Packages
                        </h2>
                        <div className="mx-auto mt-6 h-px w-16 bg-accent" />
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            All prices are approximate and may vary based on project size,
                            location, and complexity.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.title}
                                className={`flex flex-col justify-between p-8 ring-1 ring-inset ${pkg.highlight
                                    ? "bg-secondary ring-accent/20"
                                    : "bg-background ring-border"
                                    } sm:p-10`}
                            >
                                <div>
                                    <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                                        {pkg.title}
                                    </h3>
                                    <div className="mt-4 flex items-baseline gap-x-2">
                                        <span className="text-3xl font-bold tracking-tight text-foreground">
                                            {pkg.price}
                                        </span>
                                        {pkg.details && (
                                            <span className="text-sm font-semibold leading-6 text-muted-foreground">
                                                {pkg.details}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                                        {pkg.description}
                                    </p>
                                    <ul
                                        role="list"
                                        className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground"
                                    >
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <Check
                                                    className="h-6 w-5 flex-none text-accent"
                                                    aria-hidden="true"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {pkg.priceDetails && (
                                        <div className="mt-6 border-t border-border pt-6">
                                            <p className="font-semibold text-foreground mb-3">Pricing Breakdown:</p>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {pkg.priceDetails.map((detail) => (
                                                    <li key={detail.label} className="flex justify-between">
                                                        <span>{detail.label}</span>
                                                        <span className="font-medium text-foreground">{detail.value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {pkg.extras && (
                                        <p className="mt-6 text-sm italic text-accent/80">
                                            {pkg.extras}
                                        </p>
                                    )}
                                </div>

                                {pkg.footer && (
                                    <p className="mt-8 text-xs text-muted-foreground border-t border-border pt-4">
                                        {pkg.footer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mini Design Bundle - Special Feature */}
                    <div className="mx-auto mt-16 max-w-2xl rounded-sm border border-accent bg-background p-8 sm:p-10 lg:max-w-none lg:flex lg:items-center lg:justify-between lg:p-12">
                        <div className="lg:w-0 lg:flex-1">
                            <div className="flex items-center gap-x-3">
                                <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">Mini Design Bundle</h3>
                                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20">Fixed Price</span>
                            </div>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">R3 500</p>
                            <p className="mt-4 text-base leading-7 text-muted-foreground">Perfect for renovation planning. Get a quick, professional start to your project.</p>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-6 text-muted-foreground">
                                <div className="flex gap-x-2"><Check className="h-5 w-4 text-accent" /> 1 site visit</div>
                                <div className="flex gap-x-2"><Check className="h-5 w-4 text-accent" /> 2 layout options</div>
                                <div className="flex gap-x-2"><Check className="h-5 w-4 text-accent" /> 1 3D sketch</div>
                                <div className="flex gap-x-2"><Check className="h-5 w-4 text-accent" /> Cost estimate range</div>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
                            <a href="#contact" className="btn-wire px-8 py-3.5 text-sm font-semibold uppercase tracking-wider">
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* Add-ons Section */}
                    <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
                        <div className="text-center mb-10">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-foreground">Extra Services (Add-Ons)</h3>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-5 text-center">
                            {addOns.map((addon) => (
                                <div key={addon.name} className="flex flex-col gap-y-2 border-b border-accent/20 pb-4">
                                    <dt className="text-sm font-medium leading-6 text-muted-foreground">
                                        {addon.name}
                                    </dt>
                                    <dd className="order-first text-xl font-bold tracking-tight text-foreground">
                                        {addon.price}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </>
    )
}
