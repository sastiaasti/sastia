function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        KTP
                        <img src={process.env.PUBLIC_URL + '/asti.jpg'} class="flex-=col mb-1 w-40 h-60"/>
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama:
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>

                        <div class="flex-col mb-4">
                            <label
                                 class="mb-2 font-bold text-lg text -gray-600"
                                 for="nama"
                        >       
                                Tempat/Tanggal lahir: 
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="Tempat/Tanggal lahir"
                            id="naam"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-lg text-gray-600" 
                            for="naam"
                        >
                            Jenis Kelamin:
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-lg text-grey-600"
                            for="naam"
                        >
                            Alamat:
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-Ig text-grey-600"
                            for="nama"
                        >
                            Agama:
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-Ig text-gray-600"
                            for="nama"
                        >
                            Status Perkawinan:
                        </label>
                        <input
                            class="bordey py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-2 font-bold text-Ig text-gray-600"
                            for="nama"
                        >
                            Pekerjaan:
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                            class="mb-4 font-bold text-Ig text-gray-600"
                            for="nama"
                        >
                            Kewarganegaraan:
                        </label>
                        <input
                            class="border py-1 px-2 text-grey-600"
                            type="text"
                            name="nama"
                            id="naam"
                        />
                        </div>
                        <button
                        class="block bg-blue-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;