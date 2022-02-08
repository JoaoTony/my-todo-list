export const witchLevel = (level: string) => {
  switch (level) {
    case 'HIGH':
      return {
        HIGH: true,
        MEDIUM: false,
        LOW: false,
      };
    case 'LOW':
      return {
        HIGH: false,
        MEDIUM: false,
        LOW: true,
      };
    case 'MEDIUM':
      return {
        HIGH: false,
        MEDIUM: true,
        LOW: false,
      };
    default:
      return {
        HIGH: false,
        MEDIUM: false,
        LOW: false,
      };
  }
};
