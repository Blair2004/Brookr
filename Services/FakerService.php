<?php
namespace Modules\Brookr\Services;

use Faker\Factory;
use Faker\Generator;
use Faker\Provider\Fakecar;
use Modules\Brookr\Models\Truck;
use Illuminate\Support\Facades\Auth;

class FakerService 
{
    public function createFakeTrucks( $number )
    {
        $faker  =   Factory::create();
        $faker->addProvider( new Fakecar( $faker ) );

        for( $i = 0; $i < $number; $i++ ) {
            $truck                  =   new Truck;
            $truck->name            =   $faker->randomElement([
                'Nissan',
                'Peugeot',
                'Mercedes',
                'Hyndai',
                'Fiat',
                'Toyota',
                'Mitsubishi',
                'Mazda',
                'Audi',
                'Ford',
                'Chevrolet',
                'Aston Martin',
                'Mini',
                'Range Rover',
                'Renault',
                'Dacia',
            ]); 
            $truck->model           =   $faker->name;
            $truck->year            =   $faker->biasedNumberBetween(1990,2010);
            $truck->vin_number      =   $faker->vin;
            $truck->user_id         =   Auth::id();
            $truck->status          =   'available';
            $truck->license_number  =   $faker->randomNumber(5);
            $truck->save();
        }
    }
}