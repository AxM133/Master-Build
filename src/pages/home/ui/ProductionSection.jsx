import { Container, Logo, Section, SectionTitle, VideoEmbed } from '@/shared/ui'

export function ProductionSection({ title, features, videoUrl, videoPoster, videoTitle }) {
  return (
    <Section id="production" dark>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-6 py-4">
              <Logo />
            </div>
            <ul className="mt-8 space-y-6">
              {features.map(({ id, icon: Icon, text }) => (
                <li key={id} className="flex items-center gap-4 text-xs leading-relaxed">
                  <Icon className="h-8 w-8 text-white" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <VideoEmbed src={videoUrl} poster={videoPoster} title={videoTitle} />
        </div>
      </Container>
    </Section>
  )
}
