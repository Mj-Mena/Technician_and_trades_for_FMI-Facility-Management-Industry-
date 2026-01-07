<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Technician>
 */
class TechnicianFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => Hash::make(fake()->password()),
            'lat' => fake()->latitude(),
            'lng' => fake()->longitude(),
            'coverage_radius' => fake()->numberBetween(5, 50),
            'company_id' => Company::factory(),
            'email_verified_at' => now(),

        ];
    }
}
