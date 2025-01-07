"use client"

import { useState } from 'react'
import { ELearningModule } from '../e-learning-module'
import { 
  Heart, Zap, Shield, UserX, Thermometer, User2, Flame, 
  Virus, ArrowLeft, Settings, Clock, AlertTriangle, 
  Radio, Battery, UserCog 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const moduleData = {
  title: "Technologie Winback : 10 points clés",
  progress: 10,
  lastActivity: "02/09/2024 16 h 04 min",
  sections: [
    {
      title: "Les indications d'utilisation",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">LISTE DES INDICATIONS</h3>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Gestion de la douleur</h4>
              <p>Le mode Hi-TENS (courant de 300 kHz pulsé en basse fréquence) génère une antalgie supérieure au courant TENS traditionnel. Le courant Hi-TENS offre à la fois des effets immédiats plus durables et à long terme en libérant des substances endomorphinomimétiques. Le courant Tecar permet une antalgie à distance en saturant les relais synaptiques.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Amélioration des amplitudes</h4>
              <p>Le courant tecar Winback améliore l'amplitude en favorisant le relâchement des tensions. Son action thermique améliore la trophicité des tissus. Son utilisation permet de restaurer les amplitudes articulaires de façon plus rapide et sans effort.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tendinopathies</h4>
              <p>En fonction du type de tendinopathie, le courant Tecar Winback va pouvoir agir de différentes façons. La gestion de l'inflammation sera possible grâce à l'effet métabolique et antalgique. En cas de fibrose, l'hyperthermie permettra de stimuler les fibroblastes afin de redonner de l'élasticité au tendon.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Neuropathies</h4>
              <p>Le courant Hitens basse fréquence agit au niveau antalgique par neurostimulation et le courant Tecar permet d'agir à la fois à distance sur le trajet nerveux mais aussi plus localement en générant une diathermie permettant de libérer les compressions locales et favorisant la vascularisation de la gaine neurale.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tensions musculaires - Contractures</h4>
              <p>Le courant tecar Winback agit sur les contractures grâce à son action thermique favorisant le relâchement des tensions et en améliorant la vascularisation et l'oxygénation des tissus. Le courant Hi-EMS, entraine une contraction augmentant la résistance au passage du courant Tecar. Cette association permet de cibler l'effet diathermique sur le tissu musculaire et ainsi favoriser sa décontraction.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Restrictions myofasciales</h4>
              <p>Le courant tecar Winback agit sur les tissus mous en favorisant le relâchement des tensions grâce à son action thermique et en améliorant leur oxygénation. La nutrition et l'élasticité des fascias est donc améliorée de façon quasi instantanée.</p>
            </div>
          </div>
        </div>
      ),
      icon: <Zap className="h-4 w-4" />
    },
    {
      title: "Les contre-indications",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">LES CONTRE-INDICATIONS</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <p>IMPLANTS ÉLECTRIQUES (PACEMAKER, POMPE À INSULINE, NEUROSTIMULATEUR...)</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <p>THROMBOPHLÉBITE</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
              <p>INSENSIBILITÉ / INCAPACITÉ À DÉTECTER LA CHALEUR</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <Virus className="h-6 w-6 text-orange-500" />
              </div>
              <p>CANCER</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <Thermometer className="h-6 w-6 text-orange-500" />
              </div>
              <p>FIÈVRE, INFECTION</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <User2 className="h-6 w-6 text-orange-500" />
              </div>
              <p>GROSSESSE</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-4 bg-orange-100 rounded-full">
                <UserX className="h-6 w-6 text-orange-500" />
              </div>
              <p>PATIENTS MINEURS</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800">PRÉCAUTIONS</h4>
              <p className="text-red-700">Le praticien doit s'abstenir de tout traitement impliquant une application directe (contact direct avec l'électrode) sur les zones suivantes : la zone du cerveau, les yeux, le pourtour des yeux, plaies ouvertes et la zone cardiaque.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">C'EST OK !</h4>
              <p className="text-green-700">La tecarthérapie Winback peut être utilisée en toute sécurité en cas de fracture ou de matériel orthopédique (prothèses, clous centromédullaires, plaques...). Pas de contre-indication pour les patientes porteuses de stérilet.</p>
            </div>
          </div>
        </div>
      ),
      icon: <Shield className="h-4 w-4" />
    },
    {
      title: "Les indications pour chaque phase",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Les indications pour chaque phase</h3>
          <Image
            src="https://winback-academy.org/wp-content/uploads/2024/05/fr-diathermie-1024x649.png"
            alt="Diathermie phases"
            width={1024}
            height={649}
            className="rounded-lg"
          />
        </div>
      ),
      icon: <Settings className="h-4 w-4" />
    },
    {
      title: "Principes des courants Winback",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">PRINCIPES DES COURANTS WINBACK</h3>
          <div className="grid gap-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <span className="font-bold text-orange-600">1</span>
                <div>
                  <p className="font-semibold">L'énergie s'accumule de la plus petite électrode vers la plus grande</p>
                  <p className="text-sm text-gray-600">Electrode vers plaque de retour</p>
                </div>
              </div>
            </div>
            {/* Add remaining principles similarly */}
          </div>
        </div>
      ),
      icon: <Radio className="h-4 w-4" />
    },
    {
      title: "Réglage de l'intensité",
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Réglage de l'intensité</h3>
          <ul className="space-y-3">
            <li>L'intensité dépend du stade de la pathologie et de l'effet souhaité.</li>
            <li>Commencez doucement et progressivement. Augmentation en fonction du confort du patient.</li>
            <li>Vous veillerez à obtenir le retour du patient sur le niveau de chaleur pendant toute la durée du traitement.</li>
            <li>N'oubliez pas d'utiliser une crème conductrice sur la zone de traitement.</li>
          </ul>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-semibold">À retenir :</p>
            <p>CET = chaleur locale & RET : chaleur profonde</p>
          </div>
        </div>
      ),
      icon: <Battery className="h-4 w-4" />
    },
    {
      title: "Fréquence et temps de traitement",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">FRÉQUENCE ET TEMPS DE TRAITEMENT</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">À quelle fréquence, la Tecar WINBACK peut-elle être employée ?</h4>
              <p>Ces traitements peuvent être effectués plusieurs fois par jour. Il est nécessaire d'ajuster l'intensité et la durée des traitements en fonction de la pathologie traitée et des retours du patient.</p>
            </div>
            <div>
              <h4 className="font-semibold">Combien de temps doit durer une séance ?</h4>
              <p>Une séance peut durer de 5 minutes, à plus de 45 minutes. Il est important d'adapter la durée et l'intensité du traitement à l'état du patient (aigu, subaigu, chronique). Plus la séance sera longue, plus l'intensité sera faible.</p>
            </div>
          </div>
        </div>
      ),
      icon: <Clock className="h-4 w-4" />
    },
    // Add remaining sections...
  ]
}

export function BeginnerModule() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Link href="/academy" className="text-orange-500 hover:text-orange-600">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h2 className="text-2xl font-bold">Winback Academy</h2>
      </div>
      <div className="text-sm text-gray-500">
        Dernière activité le: {moduleData.lastActivity}
      </div>
      <ELearningModule
        title={moduleData.title}
        sections={moduleData.sections}
        onComplete={() => console.log('Module completed!')}
      />
    </div>
  )
}
