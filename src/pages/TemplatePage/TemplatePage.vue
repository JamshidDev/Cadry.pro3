<template>
  <div class="page-box px-5 pt-4 pb-20">
    <div class=" w-full min-h-screen card-shadow" style="border-radius: 12px">
        <div class="grid">
          <div class="col-12">
            <n-table :bordered="false" :single-line="false" size="small" striped>
              <thead>
              <tr>
                <th class="text-dark-color" style="min-width: 40px; width:40px">No</th>
                <th class="text-dark-color" style="min-width: 40px; width:40px">Rasm</th>
                <th class="text-dark-color" style="min-width: 120px; width:180px">F.I.SH</th>
                <th class="text-dark-color">Lavozim</th>
                <th class="text-dark-color">Korxona nomi</th>
                <th class="text-dark-color">Amallar</th>

              </tr>
              </thead>
              <tbody>
              <tr v-for="item in 20" :key="item">
                <td>
                   <span class="flex justify-center items-center" style="font-size: 12px">12343</span>
                </td>
                <td>
                  <span class="flex justify-center items-center">
                       <n-avatar

                           size="large"
                           src="empty.png"
                           fallback-src="https://api-exodim.railway.uz/storage/cadry-photos/1073c2a9aa5062b1e97ae88a5f5085e4.jpg"
                       />
                  </span>
                 </td>
                <td>
                  <span class="text-dark-color">
                    Jahongir Raximov
                  </span>
                </td>
                <td>O‘zbekiston temir yo‘llari AJ Rossiya Federatsiyasi Moskva shahridagi MDX temir yo‘l transporti bo‘yicha Kengash Direksiyasidagi vakolathonasining shartnomalar va huquqiy masalalar bo‘yicha bosh mutahassisi</td>
                <td>Jahongir Raximov</td>
                <td>
                  <span class="flex justify-center items-center">

                  </span>
                </td>

              </tr>
              </tbody>
            </n-table>
          </div>
        </div>
    </div>
  </div>

</template>
<script>

</script>