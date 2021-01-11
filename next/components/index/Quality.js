import Img from 'next/image'

import { Section } from '../designSystem/layout'

export default function Quality() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center bg-indigo-300 bg-opacity-60  border-t-4 border-indigo-400 rounded-sm p-8">
        <div>
          <h4>Qualité web</h4>
          <p>
            Tout développeur web devrait se pencher sur la certification Opquast, Maîtrise de la qualité en projet Web ;
            En juillet 2020,{' '}
            <a
              href="https://directory.opquast.com/fr/certificat/CFMXPT/"
              title="Certification Opquast Pasquiou Richard"
            >
              j'ai obtenu le niveau avancé
            </a>
            . Si vous ne l'avez pas encore passée, allez-y… Vraiment.
          </p>
        </div>
        <Img width="200" height="200" alt="badge Opquast avancé" src="/images/OpquastBadge.svg" />
      </div>
    </Section>
  )
}
