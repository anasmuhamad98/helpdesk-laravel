<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('priority_id')->index('priority_id');
            $table->bigInteger('unit_id')->index();
            $table->bigInteger('owner_id')->index('owner_id');
            $table->bigInteger('problem_category_id')->index('problem_category_id');
            $table->string('title');
            $table->text('description');
            $table->bigInteger('ticket_statuses_id')->index('ticket_statuses_id');
            $table->bigInteger('responsible_id')->nullable()->index('responsible_id');
            $table->timestamps();
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('solved_at')->nullable();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
