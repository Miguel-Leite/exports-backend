

export interface IAdsCreateRequest {
  name:            string;
  yearsPlaying:    number;
  discord:         string;
  weekDay:         Array<string>;
  hourStart:       string;
  hourEnd:         string;
  useVoiceChannel: boolean;
}