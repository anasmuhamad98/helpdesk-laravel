<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AlterNotificationsDataColumnToJsonb extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement('ALTER TABLE notifications ALTER COLUMN data TYPE jsonb USING data::jsonb;');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('ALTER TABLE notifications ALTER COLUMN data TYPE text;');
    }
}
