

export interface IAdsCreate {
  id?: string;
  gameId:          string;
  name:            string;
  yearsPlaying:    number;
  discord:         string;
  weekDay:         string;
  hourStart:       number;
  hourEnd:         number;
  useVoiceChannel: boolean;
}