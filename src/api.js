export async function getList() {
  const response = await fetch(
    "https://datainlife.ru/junior_task/get_products.php"
  );
  const body = await response.json();
  return body;
}

export async function registerList(nameList, exercises) {
  const response = await fetch(
    "https://datainlife.ru/junior_task/add_basket.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: FormData.stringify({
        title: nameList,
        exercises: exercises,
      }),
    }
  );

  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}
