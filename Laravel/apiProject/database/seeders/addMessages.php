<?php

namespace Database\Seeders;

use App\Models\Message;
use Illuminate\Database\Seeder;

class addMessages extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Message::truncate();
        for($i = 0; $i<11; $i++){
            $message = new Message();
            $message->title = "Mensaje $i";
            $message->description = "Descripción del mensaje número $i";
            $message->user_id= $i;
            $message->save();
        }

    }
}
