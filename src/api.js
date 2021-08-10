export async function getList() {
  const response = await fetch(
    "https://datainlife.ru/junior_task/get_products.php"
  );
  const body = await response.json();
  return body;
}

export async function registerList(id, value) {
  console.log(id, value);
  const response = await fetch(
    "https://datainlife.ru/junior_task/add_basket.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body:`${id}:${value}`
    }
  );
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}
