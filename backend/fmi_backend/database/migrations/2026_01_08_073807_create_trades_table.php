<?php

use App\Models\Technician;
use App\Models\Trades;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
            $table->string('trade_name');
            $table->timestamps();
        });
        Schema::create('technician_trades', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Technician::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Trades::class)->constrained()->cascadeOnDelete();
            $table->timestamps()->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
