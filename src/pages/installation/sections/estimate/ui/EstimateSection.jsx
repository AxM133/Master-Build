import { Container, NumberStepper, Reveal, Section, SectionDescription, SectionTitle, Switch } from '@/shared/ui'
import { ESTIMATE, useInstallationEstimate } from '../model'
import { BaseTypePicker } from './BaseTypePicker'
import { EstimateField } from './EstimateField'
import { EstimateResult } from './EstimateResult'

export function EstimateSection() {
  const estimate = useInstallationEstimate()

  return (
    <Section id={ESTIMATE.id} className="bg-neutral-50">
      <Container>
        <SectionTitle>{ESTIMATE.title}</SectionTitle>
        <SectionDescription size="sm" className="mt-4 max-w-xl">
          {ESTIMATE.description}
        </SectionDescription>

        <Reveal className="mx-auto mt-10 grid max-w-[1050px] gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-7 rounded-[28px] bg-white p-6 shadow-card lg:p-8">
            <EstimateField label="Что укладываем">
              <BaseTypePicker options={ESTIMATE.baseTypes} value={estimate.baseTypeId} onChange={estimate.setBaseTypeId} />
            </EstimateField>
            <div className="grid gap-7 sm:grid-cols-2">
              <EstimateField label="Площадь покрытия">
                <NumberStepper value={estimate.area} onChange={estimate.setArea} min={1} max={5000} suffix="м²" label="Площадь, м²" />
              </EstimateField>
              <EstimateField label="Длина бордюра">
                <NumberStepper value={estimate.curbLength} onChange={estimate.setCurbLength} min={0} max={2000} suffix="п.м." label="Длина бордюра, погонные метры" />
              </EstimateField>
            </div>
            <Switch checked={estimate.withDemolition} onChange={estimate.setWithDemolition}>
              Нужен демонтаж старого покрытия
            </Switch>
          </div>
          <EstimateResult lines={estimate.result.lines} total={estimate.result.total} />
        </Reveal>
      </Container>
    </Section>
  )
}
