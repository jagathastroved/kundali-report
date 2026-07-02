import fallbackReport from '../data/fallBackReport.json';

export interface ReportApiRequest {
  name: string;
  datetime_local: string; // Format: "YYYY-MM-DDTHH:mm:ss"
  city: string;
  state: string;
  country: string;
  ayanamsa: string;
  house_system: string;
}

export const fetchReportFull = async (payload: ReportApiRequest) => {
  const baseUrl = import.meta.env.VITE_API_URL || 'https://sprint-common-nutlike.ngrok-free.dev';
  const url = `${baseUrl}/api/v1/report/full`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const apiData = await response.json();
    console.log(apiData)
    return apiData;
  } catch (error) {
    console.error('API failed, using fallback report.', error);

    return fallbackReport;
  }
};
