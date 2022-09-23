export async function getNotionData(notionPageId: string) {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`);
  const data = await res.json();

  return { block: data };
}
