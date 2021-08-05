
export async function getList() {
    const response = await fetch(
      "https://datainlife.ru/junior_task/get_products.php"
    );
    const body = await response.json();
    return body;
  }

//   export async function getListSections(id) {
//     const response = await fetch(
//       `https://datainlife.ru/junior_task/get_products.php/${id}`
//     );
//     const body = await response.json();
//     return body;
//   }