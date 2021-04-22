<script>
  export let name;

  let count = 0;
  const plus = () => count++;
  const minus = () => count--;
  const reset = () => {
    count = 0;
  };

  let input = '';

  let firstName = '';
  let lastName = '';
  // Reactive Value
  $: fullName = `${firstName} ${lastName}`;
  // 구문을 Reactive Value에 바인딩 시킬 수도 있다.
  $: {
    console.log('firstName has benn changed to', firstName);
    console.log('lastName has benn changed to', lastName);
  }
</script>

<main>
  <h1>Hello {name}!</h1>

  <p>Count: {count}</p>
  <button on:click={minus}>-</button>
  <button on:click={reset}>0</button>
  <button on:click={plus}>+</button>

  <p>Input: {input}</p>
  <!-- value 속성에 값을 바인딩하고 handle:input 속성에 핸들링 함수를 넣는 대신 
	bind:value로 간단하게 값을 바인딩 할 수 있다. -->
  <input type="text" bind:value={input} />

  <!-- <p>{firstName}{lastName}</p> -->
  <p>Your Name: {fullName}</p>
  <input type="text" bind:value={firstName} placeholder="First Name" />
  <input type="text" bind:value={lastName} placeholder="Last Name" />
</main>

<style>
  h1 {
    font-size: 5rem;
  }
</style>
