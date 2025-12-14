export type Attributes = {
  str: number
  agi: number
  int: number
  cha: number
  points: number
}

export type Skills = {
  ironflesh: number
  power_strike: number
  power_throw: number
  power_draw: number
  weapon_master: number
  shield: number
  athletics: number
  riding: number
  horse_archery: number
  looting: number
  trainer: number
  tracking: number
  tactics: number
  path_finding: number
  spotting: number
  inventory_management: number
  wound_treatment: number
  surgery: number
  first_aid: number
  engineer: number
  persuasion: number
  prisoner_management: number
  leadership: number
  trade: number
  points: number
}

export type Hero = {
  name: string
  level: number
  health: number | '?'
  attributes: Attributes
  skills: Skills
}
