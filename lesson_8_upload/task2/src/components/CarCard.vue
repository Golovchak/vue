<template>
  <div class="car-card">
    <div class="car__img">
      <img :src="car.imgSrc" />
    </div>
    <div class="car__info">
      <div class="car__title">{{ car.make }} {{ car.model }} {{ car.year }}</div>
      <div class="car__price">{{ car.price }} $</div>
      <div class="car__info-block">
        <div class="info-block__row">
          <div class="inf-block__item">Пробіг: {{ car.mileage }} тис. км</div>
          <div class="inf-block__item">{{ car.region }}</div>
        </div>
        <div class="info-block__row">
          <div class="inf-block__item">{{ car.fuel }}, {{ car.engine }}</div>
          <div class="inf-block__item">Коробка: {{ car.transmission }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    car: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.car-card {
  display: flex;
}
.car__info {
  padding: 5px 15px;
  line-height: 1.5;
  width: 400px;
}

.car__img img {
  height: 160px;
  width: 240px;
  object-fit: cover;
}
.car__title {
  font-weight: bold;
}
.car__price {
  font-size: 20px;
  font-weight: bold;
  color: green;
}
.info-block__row {
  margin: 0 24px;
  display: flex;
  justify-content: space-between;
}
</style>